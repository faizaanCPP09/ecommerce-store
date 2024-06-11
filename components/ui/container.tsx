interface ContainerProps {
    children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({
    children                                    //extracting childrens from ContainerProps
}) => {
        return(
        <div className="mx-auto max-w-7xl">
            {children}
        </div>
    );
}
 
export default Container;