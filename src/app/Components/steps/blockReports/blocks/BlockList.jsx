const BlockList = ({children}) => {
    return (  
        <ul className=" my-4 list-none h-screen overflow-y-scroll">
            {children}
        </ul>
    );
}
 
export default BlockList;