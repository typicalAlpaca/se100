const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);

const users = [
    { name: 'Tom', country: 'Singapore' },
    { name: 'Jerry', country: 'Malaysia' },
    { name: 'Sarah', country: 'Indonesia' }
];

function WelcomeMessages(prop){
    let UserMessages = prop.users.map((user) => <li key={user.name}>{`Welcome ${user.name} from ${user.country}`}</li>);
    return UserMessages;
}

function WelcomeList(prop){
    return <ul>
        <WelcomeMessages users={prop.users} />
    </ul>;
}

function WelcomeHeader(){
    return <p>Welcome Messages</p>;
}

function App(){
    return <>
        <WelcomeHeader />
        <WelcomeList users={users}/>
    </>;
}

root.render(<App />);
