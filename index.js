const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={`button $className`}>{buttonText}</button>;
};

const element = (
  <div>
    <h1>Social Buttons</h1>
    <div class="button-container">
      <Button buttonText="Like" class="like-button" />
      <Button buttonText="Comment" class="comment-button" />
      <Button buttonText="Share" class="share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
