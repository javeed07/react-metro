import React from 'react'
import { Link } from 'react-router-dom'


function Portfolio(){
    return(<  >
    <div className="container ">
        <ul className="nav nav-pills justify-content-center" role="tablist">
            <li className="nav-item">
                <Link to="#" className="nav-link active" data-bs-toggle="pill">all</Link>
            </li>
            <li className="nav-item">
                <Link to="#" className="nav-link" data-bs-toggle="pill">web</Link>
            </li>
            <li className="nav-item">
                <Link to="#medium" className="nav-link" data-bs-toggle="pill">app</Link>
            </li>
            <li className="nav-item">
                <Link to="#small" className="nav-link" data-bs-toggle="pill">card</Link>
            </li>
        </ul>
    </div>

<div className="container my-5">
        <div className="d-flex flex-wrap">
            <div className="col-4  p-3">
                <img src='https://t4.ftcdn.net/jpg/03/14/99/11/240_F_314991122_r61maIiD7fBmRN35f5acsQUKqRDCkyrS.jpg' className="mt-3 img-thumbnail" style={{height: '350px', width: '400px'}} alt=""
                    loading="lazy" />
                <img src='https://t3.ftcdn.net/jpg/02/16/12/54/240_F_216125493_X8IK6vrdb0MabTE6nc8IcxHPe6zgYFRv.jpg' className="mt-3 img-thumbnail" style={{height: '650px', width: '400px'}} alt=""
                    loading="lazy"/>

            </div>
            <div className="col-4 p-3">
                <img src='https://t4.ftcdn.net/jpg/01/89/90/29/240_F_189902957_NzbLZ8aOriQRtFdDSl4vOg8qCNITNsBb.jpg' className="mt-3 img-thumbnail" style={{height: '300px', width: '400px'}} alt=""
                    loading="lazy"/>
                <img src='https://t4.ftcdn.net/jpg/02/85/34/99/240_F_285349918_lRouo3EAUsXp2vvgyRr2wv3Otmv16RZh.jpg' className="mt-3 img-thumbnail" style={{height: '650px',width: '400px'}} alt=""
                    loading="lazy"/>
                <img src='https://t3.ftcdn.net/jpg/02/09/22/78/240_F_209227858_PRhEi8dVca85qpZaAjE0i7jb6EJzDnST.jpg' className="my-3 img-thumbnail" style={{height: '300px', width: '400px'}} alt=""
                    loading="lazy"/>
            </div>
            <div className="col-4  p-3">
                <img src='https://t4.ftcdn.net/jpg/01/13/63/63/240_F_113636348_FPQO3sUu2ZA3HR9zOzM4lnSiWEdsoqwu.jpg' className="mt-3 img-thumbnail" style={{height: '250px', width: '400px'}} alt=""
                    loading="lazy"/>
                <img src='https://t3.ftcdn.net/jpg/01/98/97/10/240_F_198971016_Oek3Ufr6UYz7hPpINCBvq9kU5GuCY95m.jpg' className="mt-3 img-thumbnail" style={{height: '350px',width: '400px' }} alt=""
                    loading="lazy"/>
                <img src='https://t4.ftcdn.net/jpg/05/01/03/87/240_F_501038750_sJZNe4B83sf1nGFhKnrAywuHkXJkXOS4.jpg' className="mt-3 img-thumbnail" style={{height: '350px', width: '400px'}} alt=""
                    loading="lazy"/>
                <img src='https://t3.ftcdn.net/jpg/02/40/17/66/240_F_240176663_7YBGbgAiM5kiS3wp4udyz4uXfJ9ZWwfU.jpg' className="my-3 img-thumbnail" style={{height: '250px',width: '400px'}} alt=""
                    loading="lazy"/>
            </div>
        </div>

    </div>
    <h1 className='text-center text-danger ' > Portfolio Component in React-js</h1>
    <p>In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. </p>
    
    </>)
}

export default Portfolio