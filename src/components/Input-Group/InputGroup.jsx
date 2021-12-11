const InputGroup = (props) => {
    console.log(props);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
            <label style={{ fontWeight: 'bold' }} htmlFor={props.htmlFor}>{props.label}</label>
            <input style={{ border: '1px solid #ddd', padding: '0.5rem 1rem', borderRadius: '0.2rem', color: '#666' }} type={props.type} id={props.id} />
        </div>
    );
};

export default InputGroup;