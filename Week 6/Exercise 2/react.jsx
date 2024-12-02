const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);

// function names MUST use Upper Camel Case / Pascal Case, where every word's first char is capitalized (incl first word)

function WelcomeMsg(props){
    return <li>Welcome {props.name} from {props.country}</li>;
}

function WelcomeMsgHeader(){
    return <p>Welcome Messages</p>;
}

function App(){
    return(
    <div>
        <WelcomeMsgHeader />
        <ul>
            <WelcomeMsg name="Tom" country="Singapore" />
            <WelcomeMsg name="Jerry" country="Malaysia" />
            <WelcomeMsg name="Sarah" country="Indonesia" />
        </ul>
    </div>);
}

root.render(<App />);
