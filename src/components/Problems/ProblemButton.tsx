import { Link } from 'react-router-dom'

export const ProblemsButton = ({ path, header }: { path: string, header: string }) => {
    return (
        <>
            <div className="col-offset-4 col-7">
                <Link to={path}>
                    <div className='p-4 border-round bg-primary hover:bg-white hover:text-purple-500'>
                        <div className="flex flex-column md:flex-row">
                            <div className="flex align-items-center justify-content-center font-bold">
                                <p>{header}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default ProblemsButton