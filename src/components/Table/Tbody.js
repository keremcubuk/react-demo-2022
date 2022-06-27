import Thumbnail from "../Thumbnail";
import images from '../../images';

function Tbody({ list, onDelete, sepeteEkle }) {
  return (
    <tbody>
      {list?.map((item, index) => {
        return (
          <tr key={`table-item-${index}`}>
            <td>
              <Thumbnail src={images[item.img]} alt={item.alt}/>
            </td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
            <td>
              <button onClick={() => onDelete(index)}>Delete</button>
            </td>
            <td>
              <button onClick={() => sepeteEkle(item.name)}>Sepete Ekle</button>
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}

export default Tbody;