import './ToggleDarkMode.css';

const ToggleDarkMode = ({handleChange, isChecked}) => {
  return (
    <div className='darkmode-wrapper'>
      <label className='switch'>
        <input type='checkbox' className='switch' onChange={handleChange} checked={isChecked} />
        <span className='slider round'></span> 
      </label>
      <i className='icon-moon fa-solid fa-moon'></i>
    </div>
  );
}

export default ToggleDarkMode;