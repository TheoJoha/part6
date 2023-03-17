const Filter = () => {
    const handleChange = (event) => {
      // input-field value is in variable event.target.value
      filterSelected(event.target.value)

    }
    const style = {
      marginBottom: 10
    }

    const filterSelected = (value) => {
        console.log(value)
      }
  
    return (
      <div style={style}>
        filter <input /* onChange={handleChange} */ name='filter' onChange={handleChange()}/>
      </div>
    )
  }
  
  export default Filter