import React, { useState, useEffect } from 'react';

const CRM = () => {
    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');

    // Filters & Sorting State
    const [searchTerm, setSearchTerm] = useState('');
    const [filterService, setFilterService] = useState('All');
    const [filterStatus, setFilterStatus] = useState('All');
    const [sortKey, setSortKey] = useState('created_at-desc'); // format: key-direction

    useEffect(() => {
        if (isAuthenticated) {
            fetchLeads();
        }
    }, [isAuthenticated]);

    const fetchLeads = () => {
        setLoading(true);
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        fetch(`${API_URL}/api/enquiries`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setEnquiries(data.enquiries);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching CRM leads:", err);
                setLoading(false);
            });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (passwordInput === 'admin123') {
            setIsAuthenticated(true);
        } else {
            alert('Incorrect Admin Password');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this lead permanently?")) return;

        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const res = await fetch(`${API_URL}/api/enquiries/${id}`, {
                method: 'DELETE'
            });
            const data = await res.json();

            if (data.success) {
                setEnquiries(enquiries.filter(lead => lead.id !== id));
            } else {
                alert("Failed to delete lead from server.");
            }
        } catch (err) {
            console.error(err);
            alert("Error trying to process the deletion.");
        }
    };

    const handleStatusChange = async (id, newStatus) => {
        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const res = await fetch(`${API_URL}/api/enquiries/${id}/status`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            });
            const data = await res.json();

            if (data.success) {
                setEnquiries(enquiries.map(lead => lead.id === id ? { ...lead, status: newStatus } : lead));
            } else {
                alert("Failed to update status.");
            }
        } catch (err) {
            console.error(err);
            alert("Error trying to update status.");
        }
    };

    // Build the properly filtered list
    let filteredLeads = enquiries.filter(lead => {
        const matchesSearch =
            lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lead.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lead.email?.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesService = filterService === 'All' || lead.service === filterService;
        const matchesStatus = filterStatus === 'All' || (lead.status || 'New') === filterStatus;

        return matchesSearch && matchesService && matchesStatus;
    });

    // Apply Sorting
    const [sKey, sDir] = sortKey.split('-');
    filteredLeads.sort((a, b) => {
        let valA = a[sKey] || '';
        let valB = b[sKey] || '';

        // Normalize string comparisons
        if (typeof valA === 'string') valA = valA.toLowerCase();
        if (typeof valB === 'string') valB = valB.toLowerCase();

        if (valA < valB) return sDir === 'asc' ? -1 : 1;
        if (valA > valB) return sDir === 'asc' ? 1 : -1;
        return 0;
    });

    const exportToCSV = () => {
        if (filteredLeads.length === 0) return alert("No leads to export.");

        const headers = ["ID", "Submit Date", "Name", "Email", "Phone", "Company", "Service Needed", "Monthly Revenue", "Status", "Message"];
        const csvRows = [headers.join(',')];

        filteredLeads.forEach(lead => {
            const row = [
                lead.id,
                `"${new Date(lead.created_at).toLocaleString().replace(/"/g, '""')}"`,
                `"${(lead.name || '').replace(/"/g, '""')}"`,
                `"${(lead.email || '').replace(/"/g, '""')}"`,
                `"${(lead.phone || '').replace(/"/g, '""')}"`,
                `"${(lead.company || '').replace(/"/g, '""')}"`,
                `"${(lead.service || '').replace(/"/g, '""')}"`,
                `"${(lead.revenue || '').replace(/"/g, '""')}"`,
                `"${(lead.status || 'New').replace(/"/g, '""')}"`,
                `"${(lead.message || '').replace(/"/g, '""')}"`
            ];
            csvRows.push(row.join(','));
        });

        const csvContent = csvRows.join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `Adlearnr_Leads_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (!isAuthenticated) {
        return (
            <main className="crm-login" style={{ paddingTop: '150px', paddingBottom: '80px', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ background: 'var(--clr-bg-card)', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center', maxWidth: '400px', width: '100%' }}>
                    <i className="fa-solid fa-lock fa-3x" style={{ color: 'var(--clr-primary)', marginBottom: '1.5rem' }}></i>
                    <h2 style={{ marginBottom: '0.5rem' }}>Admin Access</h2>
                    <p style={{ color: 'var(--clr-text-muted)', marginBottom: '2rem' }}>Please enter the CRM dashboard password to view secure leads.</p>
                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={passwordInput}
                            onChange={(e) => setPasswordInput(e.target.value)}
                            style={{ padding: '1rem', borderRadius: '50px', border: '1px solid rgba(0,0,0,0.1)', width: '100%' }}
                            required
                        />
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Access Leads</button>
                    </form>
                </div>
            </main>
        );
    }

    return (
        <main className="crm-dashboard" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh', background: 'var(--clr-bg)' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Enquiry <span className="text-gradient">CRM</span></h1>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{ background: 'var(--clr-primary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '50px', fontWeight: 'bold' }}>
                            {filteredLeads.length} Leads
                        </div>
                        <button
                            onClick={exportToCSV}
                            className="btn btn-secondary"
                            style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                        >
                            <i className="fa-solid fa-file-excel"></i> Export to Excel
                        </button>
                    </div>
                </div>

                {/* Filters & Sorting Toolbar */}
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>

                    {/* Search */}
                    <div style={{ flex: '1', minWidth: '250px', position: 'relative' }}>
                        <i className="fa-solid fa-search" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--clr-text-muted)' }}></i>
                        <input
                            type="text"
                            placeholder="Search by Name, Company, or Email..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 2.5rem', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)' }}
                        />
                    </div>

                    {/* Services Filter */}
                    <select
                        value={filterService}
                        onChange={(e) => setFilterService(e.target.value)}
                        style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)', minWidth: '200px' }}
                    >
                        <option value="All">All Services Offered</option>
                        <option value="performance">Performance Marketing & Ads</option>
                        <option value="lead-gen">Lead Gen & eCommerce</option>
                        <option value="seo">Search Engine Optimization</option>
                        <option value="consulting">Strategy & Consultation</option>
                    </select>

                    {/* Status Filter */}
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)', minWidth: '150px' }}
                    >
                        <option value="All">All Status</option>
                        <option value="New">New</option>
                        <option value="Qualified">Qualified</option>
                        <option value="Not Qualified">Not Qualified</option>
                        <option value="Call Not Picked">Call Not Picked</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Closed">Closed</option>
                    </select>

                    {/* Sorting Picker */}
                    <div style={{ position: 'relative', minWidth: '200px' }}>
                        <i className="fa-solid fa-sort" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--clr-text-muted)' }}></i>
                        <select
                            value={sortKey}
                            onChange={(e) => setSortKey(e.target.value)}
                            style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 2.5rem', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)' }}
                        >
                            <option value="created_at-desc">Sort: Newest First</option>
                            <option value="created_at-asc">Sort: Oldest First</option>
                            <option value="name-asc">Sort: Name (A-Z)</option>
                            <option value="name-desc">Sort: Name (Z-A)</option>
                            <option value="company-asc">Sort: Company (A-Z)</option>
                        </select>
                    </div>
                </div>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--clr-text-muted)' }}>
                        <i className="fa-solid fa-spinner fa-spin fa-3x" style={{ marginBottom: '1rem' }}></i>
                        <p>Securely fetching leads...</p>
                    </div>
                ) : enquiries.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '4rem', background: 'var(--clr-bg-card)', borderRadius: 'var(--radius-lg)' }}>
                        <i className="fa-solid fa-inbox fa-3x" style={{ color: 'var(--clr-text-muted)', marginBottom: '1rem' }}></i>
                        <h3>No enquiries yet</h3>
                        <p style={{ color: 'var(--clr-text-muted)' }}>When a user submits the form, it will automatically appear here.</p>
                    </div>
                ) : filteredLeads.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '4rem', background: 'var(--clr-bg-card)', borderRadius: 'var(--radius-lg)' }}>
                        <i className="fa-solid fa-filter-circle-xmark fa-3x" style={{ color: 'var(--clr-text-muted)', marginBottom: '1rem' }}></i>
                        <h3>No matching leads</h3>
                        <p style={{ color: 'var(--clr-text-muted)' }}>Try adjusting your search criteria or clear your filters.</p>
                        <button onClick={() => { setSearchTerm(''); setFilterService('All'); setFilterStatus('All'); setSortKey('created_at-desc'); }} className="btn btn-primary" style={{ marginTop: '1rem' }}>Clear Filters</button>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {filteredLeads.map((lead) => (
                            <div key={lead.id} style={{
                                background: 'var(--clr-bg-card)',
                                padding: '1.5rem 2rem',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                display: 'grid',
                                gridTemplateColumns: 'minmax(250px, 1fr) 2fr 160px',
                                gap: '2rem',
                                borderLeft: '4px solid var(--clr-primary)',
                                alignItems: 'center'
                            }}>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{lead.name}</h4>
                                    <p style={{ color: 'var(--clr-primary)', fontWeight: '600', marginBottom: '1rem' }}>{lead.company}</p>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--clr-text-muted)' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <i className="fa-regular fa-envelope" style={{ width: '16px' }}></i>
                                            <a href={`mailto:${lead.email}`} style={{ color: 'inherit' }}>{lead.email}</a>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <i className="fa-solid fa-phone" style={{ width: '16px' }}></i>
                                            <a href={`tel:${lead.phone}`} style={{ color: 'inherit' }}>{lead.phone || 'N/A'}</a>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <i className="fa-regular fa-clock" style={{ width: '16px' }}></i>
                                            <span>{new Date(lead.created_at).toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ background: 'rgba(0,0,0,0.02)', padding: '1.5rem', borderRadius: 'var(--radius-md)', height: '100%' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                                        <div>
                                            <p style={{ fontSize: '0.8rem', color: 'var(--clr-text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Service Needed</p>
                                            <p style={{ fontWeight: '500' }}>{
                                                lead.service === 'performance' ? 'Performance Marketing & Ads' :
                                                    lead.service === 'lead-gen' ? 'Lead Generation & eCommerce' :
                                                        lead.service === 'seo' ? 'Search Engine Optimization' :
                                                            lead.service === 'consulting' ? 'Strategy & Consultation' :
                                                                lead.service || 'Not specified'
                                            }</p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.8rem', color: 'var(--clr-text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Monthly Revenue</p>
                                            <p style={{ fontWeight: '500' }}>{
                                                lead.revenue === 'under-10l' ? 'Under ₹10L / month' :
                                                    lead.revenue === '10l-50l' ? '₹10L - ₹50L / month' :
                                                        lead.revenue === '50l-1cr' ? '₹50L - ₹1Cr / month' :
                                                            lead.revenue === 'over-1cr' ? 'Over ₹1Cr / month' :
                                                                lead.revenue || 'Not specified'
                                            }</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--clr-text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Message</p>
                                        <p style={{ fontStyle: lead.message ? 'normal' : 'italic', color: lead.message ? 'inherit' : 'var(--clr-text-muted)' }}>
                                            {lead.message || 'No additional message provided.'}
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', alignItems: 'flex-end', justifyContent: 'flex-start', paddingTop: '0.5rem' }}>
                                    <select
                                        value={lead.status || 'New'}
                                        onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                                        style={{
                                            padding: '0.4rem 0.5rem',
                                            borderRadius: '6px',
                                            border: '1px solid rgba(0,0,0,0.1)',
                                            background: (lead.status === 'Qualified' || lead.status === 'Closed') ? '#d4edda' : lead.status === 'Not Qualified' ? '#f8d7da' : (lead.status === 'Call Not Picked' || lead.status === 'In Progress') ? '#fff3cd' : '#e2e3e5',
                                            color: (lead.status === 'Qualified' || lead.status === 'Closed') ? '#155724' : lead.status === 'Not Qualified' ? '#721c24' : (lead.status === 'Call Not Picked' || lead.status === 'In Progress') ? '#856404' : '#383d41',
                                            fontWeight: 'bold',
                                            cursor: 'pointer',
                                            width: '100%',
                                            fontSize: '0.85rem'
                                        }}
                                    >
                                        <option value="New">New</option>
                                        <option value="Qualified">Qualified</option>
                                        <option value="Not Qualified">Not Qualified</option>
                                        <option value="Call Not Picked">Call Not Picked</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Closed">Closed</option>
                                    </select>
                                    <button
                                        onClick={() => handleDelete(lead.id)}
                                        style={{ background: 'none', border: 'none', color: '#ff4c4c', cursor: 'pointer', padding: '0.5rem', transition: 'transform 0.2s', fontSize: '1.25rem', marginTop: 'auto' }}
                                        title="Delete Lead"
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    >
                                        <i className="fa-solid fa-trash-can"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
};

export default CRM;
