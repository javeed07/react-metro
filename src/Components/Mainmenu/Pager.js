import { React } from 'react'

export default (props) => {
    var numbers = []

    var {totalPostsInAPI,maxDisplayrecordsPerButton} =props

    var numberOfButtons = totalPostsInAPI /maxDisplayrecordsPerButton;
    for (let i = 1; i <= numberOfButtons; i++) {
        numbers.push(i)
    }
    return (
        <div className='container py-1'>

            <ul class="pagination">
                {
                    numbers.map((bno, i) =>  <li class="page-item">
                    <a class="page-link" onClick={ ()=>props.getButtonNumber(bno)}>{bno}</a></li> )
                }
            </ul>


        </div>
    )

}