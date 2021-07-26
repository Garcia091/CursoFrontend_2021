import React from 'react'
import { useDispatch } from 'react-redux';
import { CardNew, startUploading } from '../../actions/cardAction';
import { useForm } from '../../hooks/useForm'

const AddProduct = () => {

  const dispatch = useDispatch();
  let file =[];

  const [values, handleInputChange, reset] = useForm({
    title: '',
    responsible: '',
    description: '',
    priority: ''
  })

  const { title, responsible, description, priority } = values

  const handleFileChange = (e) => {
    file  = e.target.files[0];
   console.log('url cargado', file)
 }

  const handlNewCard = (e) => {
    e.preventDefault();
    dispatch(CardNew(values,file))
    reset()
  }

  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click();
  }

 

  return (
    <div className="card container text-center">
      <h2>Agregar nueva tarea</h2>
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
    </div>
  )
}

export default AddProduct
