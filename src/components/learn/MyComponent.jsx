//JSX
//Fragment
import './style.css';

const MyComponent = () => {
    // const dragoncenter = "number one"; //string
    // const dragoncenter = 1000; //number 
    // const dragoncenter = true; //boolean
    // const dragoncenter = undefined;
    // const dragoncenter = null;
    const dragoncenter = [1,2,3];
    return (
        <>
      <div>{JSON.stringify(dragoncenter)} & Hello</div>
      <div className="datdinh"
            style={{ borderRadius: "10px"}}
        >datdinh</div>
      </>
    );
  }

  export default MyComponent