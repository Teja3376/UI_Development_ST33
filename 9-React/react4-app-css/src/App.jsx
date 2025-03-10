
function App() {
  var fname = "Charan";
  var lname = "Teja";
  var age = 21;
  const mystyle = {
    margin : '28px',
    padding : '28px',
    boxSizing :'border-box',
    borderRadius:'10px',
    boxShadow : '0px 8px 20px #ddd'
  }
  return (
    <>
    <div style={mystyle}>
    <h3>first namee : {fname}</h3>
    <h3>Last Name : {lname}</h3>
    <h3>Age : {age}</h3>
   </div>
    </>
  );
}

export default App
