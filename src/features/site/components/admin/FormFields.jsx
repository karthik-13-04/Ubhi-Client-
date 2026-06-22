'use client';

/* Shared field styles injected once */
const fieldStyle = {
  display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '14px',
};
const labelStyle = { fontSize: '0.8rem', fontWeight: 600, color: '#5a4420', letterSpacing: '0.02em' };
const inputStyle = {
  border: '1px solid rgba(166,116,31,0.25)',
  borderRadius: '10px',
  padding: '9px 12px',
  fontSize: '0.9rem',
  background: 'rgba(255,255,255,0.7)',
  color: '#2a1e08',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
};

export function FormField({ label, children }) {
  return (
    <div style={fieldStyle}>
      <span style={labelStyle}>{label}</span>
      {children}
    </div>
  );
}

export function FormInput({ label, ...props }) {
  return (
    <FormField label={label}>
      <input style={inputStyle} {...props} />
    </FormField>
  );
}

export function FormTextarea({ label, rows = 4, ...props }) {
  return (
    <FormField label={label}>
      <textarea style={{ ...inputStyle, resize: 'vertical' }} rows={rows} {...props} />
    </FormField>
  );
}

export function FormSelect({ label, options, ...props }) {
  return (
    <FormField label={label}>
      <select style={inputStyle} {...props}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </FormField>
  );
}

export function FormToggle({ label, checked, onChange }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
      <div
        role="switch"
        aria-checked={checked}
        tabIndex={0}
        onClick={() => onChange(!checked)}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onChange(!checked)}
        style={{
          width: '40px', height: '22px', borderRadius: '11px', cursor: 'pointer',
          background: checked ? '#a6741f' : 'rgba(120,96,60,0.25)',
          position: 'relative', transition: 'background 0.2s', flexShrink: 0,
          outline: 'none',
        }}
      >
        <span style={{
          position: 'absolute', top: '3px', left: checked ? '21px' : '3px',
          width: '16px', height: '16px', borderRadius: '50%', background: '#fff',
          transition: 'left 0.2s', boxShadow: '0 1px 4px rgba(0,0,0,0.18)',
        }} />
      </div>
      <span style={labelStyle}>{label}</span>
    </div>
  );
}

export function FormActions({ onCancel, submitLabel = 'Save', submitting = false }) {
  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '20px' }}>
      {onCancel && (
        <button
          type="button"
          onClick={onCancel}
          style={{
            padding: '9px 20px', borderRadius: '12px', border: '1px solid rgba(166,116,31,0.3)',
            background: 'transparent', color: '#5a4420', cursor: 'pointer', fontSize: '0.9rem',
          }}
        >Cancel</button>
      )}
      <button
        type="submit"
        disabled={submitting}
        style={{
          padding: '9px 24px', borderRadius: '12px', border: 'none',
          background: submitting ? 'rgba(166,116,31,0.4)' : '#a6741f',
          color: '#fff', cursor: submitting ? 'not-allowed' : 'pointer',
          fontSize: '0.9rem', fontWeight: 600,
        }}
      >{submitting ? 'Saving…' : submitLabel}</button>
    </div>
  );
}
