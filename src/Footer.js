function Footer(props) {
  var nama= 'Daoa';
  return(
    <div>
      <h3>{props.judul}</h3>
      <h3>Component ini dibuat menggunakan function bukan class</h3>
      <h3>Website ini dibuat oleh: {props.nama}</h3>
    </div>
  );
}

export default Footer