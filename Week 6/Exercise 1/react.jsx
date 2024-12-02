const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);


const element =
<>
    <p>Welcome Messages</p>
    <ul>
        <li>Welcome Tom from Singapore</li>
        <li>Welcome Jerry from Malaysia</li>
        <li>Welcome Sarah from Indonesia</li>
    </ul>
</>;

root.render(element);
