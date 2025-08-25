

export default function Page() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          backdropFilter: 'blur(16px) saturate(120%)',
          background: 'rgba(24, 24, 27, 0.88)',
          borderRadius: '20px',
          boxShadow: '0 2px 16px 0 rgba(0,0,0,0.32)',
          border: '1px solid #222',
          padding: '2.5rem 2rem 2rem 2rem',
          maxWidth: 380,
          width: '92vw',
          textAlign: 'center',
          color: '#fff',
          position: 'relative',
          boxSizing: 'border-box',
          fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
        }}
      >
        <div style={{marginBottom: 20}}>
          <span style={{
            fontSize: 48,
            display: 'inline-block',
            color: '#fff',
            filter: 'none',
            textShadow: '0 2px 8px #0008',
          }}>🚧</span>
        </div>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 800,
          marginBottom: 10,
          letterSpacing: 0.5,
          color: '#fff',
          textShadow: '0 2px 8px #0008',
        }}>Under Construction</h1>
        <p style={{fontSize: '1.08rem', color: '#bbb', marginBottom: 24, textShadow: '0 1px 4px #0004'}}>
          This site is getting a glow-up.<br />Stay tuned for something awesome!
        </p>
        <div style={{display: 'flex', justifyContent: 'center', gap: 20, marginTop: 16}}>
          <a
            href="https://www.linkedin.com/in/gaindunuhansith/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '50%',
              padding: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s',
            }}
          >
            <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
          </a>
          <a
            href="https://github.com/gaindunuhansith"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '50%',
              padding: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s',
            }}
          >
            <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
          </a>
          <a
            href="mailto:gainuhansith@gmail.com"
            aria-label="Email"
            style={{
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '50%',
              padding: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s',
            }}
          >
            <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.99l7.29 6.71c.39.36 1.02.36 1.41 0L20 8.99V20H4z"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}


