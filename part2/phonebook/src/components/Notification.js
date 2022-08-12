const Notification = ({ message, setMessage }) => {
    if (message === null) {
        return null;
    }

    const noteStyle = {
        color: message.success ? 'green' : 'red', 
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    setTimeout( () => { setMessage( null ) }, 5000 );

    return (
      <div style={noteStyle}>
        {message.text}
      </div>
    );
};

export default Notification