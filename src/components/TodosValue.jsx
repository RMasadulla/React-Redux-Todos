import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getTodosAction from '../services/actions/Actions';
import { Table } from 'react-bootstrap'
import { TailSpin   } from 'react-loader-spinner'


function TodosValue() {
  const dispatch = useDispatch()
  const { todos, isLoading, error } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getTodosAction())
  }, [dispatch])
  return (
    <>
      <h3 className="d-flex justify-content-center">React Redux Todo</h3>
      {isLoading && <TailSpin className="d-flex align-items-cente justify-content-center" color="#00BFFF" height={80} width={80} />}
      {error && <h3 className="d-flex align-items-cente justify-content-center">{error}</h3>}
      {error ? false : 
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Quotes</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {
            todos && todos.map((todo, id) => {
              const { completed, title } = todo
              return (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{title}</td>
                  <td>{completed ? "True" : "False"}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
}
    </>
  )
}

export default TodosValue;