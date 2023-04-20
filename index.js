const Button = (props) => {
  const { buttonText, className } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  <div className="bg-cont">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttonCont">
      <Button buttonText="Like" className="button1" />
      <Button buttonText="Comment" className="button2" />
      <Button buttonText="Share" className="button3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
