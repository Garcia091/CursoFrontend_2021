import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Edit, clearCard } from '../../actions/cardAction';
import { useForm } from '../../hooks/useForm'

const EditProduct = () => {

  const { active } = useSelector(state => state.card)
  let file = []
  const dispatch = useDispatch();

  const activeId = useRef(active.id)

  useEffect(() => {
    if (active.id !== activeId.current) {
      reset(active)
    }
    activeId.current = active.id
  }, [active])


  const [values, handleInputChange, reset] = useForm(active)

  const { title, responsible, description, priority, url} = values

  
  const handelClear = () => {
    dispatch(clearCard())
  }

  const handleFileChange = (e) => {
    file = e.target.files[0];
    console.log('url cargado', file)
  }
  
  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click();
  }

  const handlNewCard = (e) => {
    e.preventDefault();
    console.log(values)
    dispatch(Edit(values,file))
  }


  return (
    <div className="card container text-center">
      <h2>Editar nueva tarea</h2>
      <form className="card-body " onSubmit={handlNewCard}>
        <div className="form-group">
          <input
            type="text"
            name="title"
            className="form-control mt-1"
            placeholder="Title"
            value={title}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="responsible"
            className="form-control mt-1"
            placeholder="Responsible"
            value={responsible}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="description"
            className="form-control mt-1"
            placeholder="Description"
            value={description}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <select
            name="priority"
            className="form-control mt-1"
            value={priority}
            onChange={handleInputChange}
          >
            <option>low</option>
            <option>medium</option>
            <option>high</option>
          </select>
        </div>

        <input
          id="fileSelector"
          type="file"
          name="file"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <div>
          <input
            type="button"
            className="btn border-bottom shadow-sm" 
            onClick={handlePictureClick}
            value="Picture"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Save
        </button>

      </form>
      <button type="submit" className="btn btn-info mt-2"
        onClick={handelClear}>
        Clear
      </button>
    </div>
  )
}

export default EditProduct
