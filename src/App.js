// Memanggil react menggunakan class
// import React, {Component} from "react";
// import Header from "./Header";


// 1. class App extends Component {
//   render() {
//     return(
//       <div>
//         <Header />
//         <h2>Hello word!</h2>
//       </div>
//     );
//   }
// }

// export default App
//END




// 2. Memanggul react menggunakan function
// import Header from './Header'


// function App() {
//   return (
//     <div>
//       <Header />
//   <h2>halo dunia</h2>
//   </div>
//   )
// }
// export default App;
//END


// 3. Parsing nilai ke component
// import Header from './Header'

// function Footer() {
//   var nama= 'Daoa';
//   return(
//     <div>
//       <h3>Halaman Footer</h3>
//       <h3>Component ini dibuat menggunakan function bukan class</h3>
//       <h3>Website ini dibuat oleh: {nama}</h3>
//     </div>
//   )
// }


// export default  function App() {
//   return(
//     <div>
//       <Header />
//     <Footer />
//     </div>
//   );
// }

// export default App;
//END

// Membuat list component
import Header from "./Header";
import Footer from "./Footer";
import Image from "./Image";

function List() {
return(
  <div>
    <Image />
    <ol>
    <li>Satu</li>
    <li>Dua</li>
    <li>tiga</li>
    </ol>
    <Footer judul='Halaman Footer' nama='Daoa'/>
  </div>
)
}

export default List