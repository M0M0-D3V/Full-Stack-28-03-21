const MessageForm = (stuff) => {
  const { setMessage, message, setList, list } = stuff;
  // "lifting the below state to App.js so that it can be used across multiple components"
  //   const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // what should we do with the message?
    // add logic to handle submit!
    console.log("Form is submitted!", message);
    // setList.push()? push will not work because it only available for arrays, and setList is a function and not an array
    setList([...list, message]);

    // reset form after hitting submit
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
                  <h1>Set Message</h1>
                  
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter your message here"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
                  
      <input type="submit" value="Send Message" />
              
    </form>
  );
};

export default MessageForm;
