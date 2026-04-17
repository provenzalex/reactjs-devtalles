
const useState = ( initialValue:string ) => 
    [
        initialValue,
        ( changeValue: string ) => {
        console.log(changeValue);
        },
    ] as const;

const [ name, setName ] = useState('Goku');
console.log(name);
setName('Vageta');
