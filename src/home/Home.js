import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getData } from './action';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

    const dispatch = useDispatch();

    /**
     * get all data by useSelector
     */
    const { homePageData } = useSelector((store) => ({
        homePageData: store?.home?.homePageData
    }));

    // ===================== dispatch action ====================
    useEffect(() => {
        dispatch(getData())
    }, []);

    return (
        <>
            {<div className="my-5">
                <h2>Final Exam</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        {/*Get data */} 
                        <tbody>
                            {homePageData?.map((item, index) => (
                                <tr key={Math.random()}>
                                    <td>{index + 1}</td>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>}
        </>
    )
}

