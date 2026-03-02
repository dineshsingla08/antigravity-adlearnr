import React, { useState, useEffect } from 'react';

const CRM = () => {
    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');

    useEffect(() => {
        if (isAuthenticated) {
            fetch('http://localhost:5000/api/enquiries')
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
        }
    }, [isAuthenticated]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (passwordInput === 'admin123') { // Simple hardcoded password for now
            setIsAuthenticated(true);
        } else {
            alert('Incorrect Admin Password');
        }
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Enquiry <span className="text-gradient">CRM</span></h1>
                    <div style={{ background: 'var(--clr-primary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '50px', fontWeight: 'bold' }}>
                        {enquiries.length} Total Leads
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
                ) : (
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {enquiries.map((lead) => (
                            <div key={lead.id} style={{
                                background: 'var(--clr-bg-card)',
                                padding: '2rem',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                display: 'grid',
                                gridTemplateColumns: 'minmax(250px, 1fr) 2fr',
                                gap: '2rem',
                                borderLeft: '4px solid var(--clr-primary)'
                            }}>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{lead.name}</h4>
                                    <p style={{ color: 'var(--clr-primary)', fontWeight: '600', marginBottom: '1.5rem' }}>{lead.company}</p>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--clr-text-muted)' }}>
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

                                <div style={{ background: 'rgba(0,0,0,0.02)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                                        <div>
                                            <p style={{ fontSize: '0.8rem', color: 'var(--clr-text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Service Needed</p>
                                            <p style={{ fontWeight: '500' }}>{lead.service || 'Not specified'}</p>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.8rem', color: 'var(--clr-text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Monthly Revenue</p>
                                            <p style={{ fontWeight: '500' }}>{lead.revenue || 'Not specified'}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--clr-text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Message</p>
                                        <p style={{ fontStyle: lead.message ? 'normal' : 'italic', color: lead.message ? 'inherit' : 'var(--clr-text-muted)' }}>
                                            {lead.message || 'No additional message provided.'}
                                        </p>
                                    </div>
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
