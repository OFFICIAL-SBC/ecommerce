import Layout from "../../Layout";
import { USER_NAME } from "../../Constants";

const Tracker = () =>{
    return(
        <Layout css={"grid grid-cols-6 grid-rows-10 w-11/12 h-screen gap-4 mx-auto p-4 "}>
            <div className="flex flex-col justify-evenly col-span-4 row-span-3 bg-blue-600 p-4 rounded-lg">
                <div className="flex w-full justify-between px-4">
                    <h3>Hello {USER_NAME}</h3>
                    <h2>This week</h2>
                </div>
                <div className="flex w-full justify-evenly">
                    <div className="flex justify-center items-center w-20 h-20 rounded-lg bg-red-600">
                        <p>Day 1</p>
                    </div>
                    <div className="flex justify-center items-center w-20 h-20 rounded-lg bg-red-600">
                        <p>Day 2</p>
                    </div>
                    <div className="flex justify-center items-center w-20 h-20 rounded-lg bg-red-600">
                        <p>Day 3</p>
                    </div>
                    <div className="flex justify-center items-center w-20 h-20 rounded-lg bg-red-600">
                        <p>Day 4</p>
                    </div>
                    <div className="flex justify-center items-center w-20 h-20 rounded-lg bg-red-600">
                        <p>Day 5</p>
                    </div>
                    <div className="flex justify-center items-center w-20 h-20 rounded-lg bg-red-600">
                        <p>Day 6</p>
                    </div>
                </div>
            </div>
            <div className="flex col-start-5 col-end-7 row-span-3 bg-green-400 rounded-lg">
                Todays workout percentage
            </div>
            <div className="flex col-span-3 row-span-4 bg-red-400 rounded-lg">
                workout Statistics
            </div>
            <div className="flex col-start-4 col-end-7 row-span-4 bg-orange-400 rounded-lg">
                Weigh Statistics
            </div>
        </Layout>
    );
}

export {Tracker}