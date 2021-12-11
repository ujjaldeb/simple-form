const variant = {
    primary: {
        backgroundColor: '#2196f3',
        color: '#fff'
    },
    success: {
        backgroundColor: '#4caf50',
        color: '#000'
    },
    error: {
        backgroundColor: '#f44336',
        color: '#fff'
    },
    warning: {
        backgroundColor: '#ff9800',
        color: '#fff'
    },
    info: {
        backgroundColor: '#80d8ff',
        color: '#000'
    }
};

const sizes = {
    small: {
        padding: '0.5rem 1rem'
    },
    medium: {
        padding: '1rem 2rem'
    },
    large: {
        padding: '1.5rem 3rem'
    },
}

const Button = (props) => {
    const userVariant = variant[props.variant];
    const userSize = sizes[props.size];
    return (
        <button
            type={props.type}
            style={{
                textTransform: 'uppercase',
                fontWeight: '700',
                border: 'none',
                borderRadius: '0.2rem',
                marginRight: '0.5rem',
                cursor: 'pointer',
                ...userVariant,
                ...userSize,
            }}
        >{props.text}</button>
    );
};

export default Button;