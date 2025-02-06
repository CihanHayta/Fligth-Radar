import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Error from "../components/Error";
import Loader from "../components/Loader";
import c from "../utils/nullCheck";
import "bootstrap/dist/css/bootstrap.min.css";
import { open } from "../redux/slices/detailSlice";
import ReactPaginate from 'react-paginate';



const List = () => {

  const dispatch = useDispatch();
  const { isLoading, error, flights } = useSelector((store) => store.flight);

  const [start, setStart] = useState(0);

  const perPage = 12;
  const end = start + perPage;

  const currFlights=  flights.slice(start, end);

  const total = Math.ceil(flights.length / perPage);

  const handlePage = (event) => {
    setStart(event.selected * 10);
  };





  if (isLoading) return <div className='list-wrapper'> <Loader /> </div>;

  if (error) return <div className='list-wrapper'> <Error message={error} /> </div>;



  return (
    <div className="list-container">

      <table className="table table-hover table-responsive">
        <thead>
          <tr>
            <th>id</th>
            <th>Kod</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>Derece</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {currFlights.map((flight) => (
            <tr>
              <td>{c(flight.id)}</td>
              <td>{c(flight.code)}</td>
              <td>{c(flight.lat)}</td>
              <td>{c(flight.lng)}</td>
              <td>{c(flight.deg)}</td>
              <td>
                <button onClick={() => dispatch(open(flight.id))}>Detay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      <>

        <ReactPaginate
          breakLabel="..."
          nextLabel="ileri >"
          previousLabel="< geri"
          className='pagination'
          onPageChange={() => { }}
          pageRangeDisplayed={5}
          pageCount={total}
          renderOnZeroPageCount={null}
          onPageChange={handlePage}

        />
      </>


    </div>
  )
}

export default List;