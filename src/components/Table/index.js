import Tbody from './Tbody';
import Thead from './Thead';
import './styles.css'

export default function Table({ data, onDelete, sepeteEkle }) {
  return (
    <table>
      <Thead />
      <Tbody list={data} onDelete={onDelete} sepeteEkle={sepeteEkle} />
    </table>
  );
}