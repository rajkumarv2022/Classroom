
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import LandinPage from './component/LandinPage'
import LoginPage from './component/LoginPage'
import SignupPage from './component/SignupPage'
import StudentMain from './component/StudentMain'
import FacultyMain from './component/FacultyMain'


export default function App() {

  
  return (
    
      <Router>

      

      <Routes>

      
        <Route path='/' Component={LandinPage}></Route>
        <Route path='/Login' Component={LoginPage}></Route>
        <Route path='/Signup' Component={SignupPage}></Route>
        <Route path='/student/:user_id' Component={StudentMain}></Route>
        <Route path='/faculty/:user_id' Component={FacultyMain}></Route>
        


        {/* <Route path='/product/:user_id' Component={ProductList}></Route>
        <Route path='/products/:user_id' Component={ProductsList}></Route>
        <Route path='/product/order' Component={Order}></Route>
        <Route path='/product/:user_id/history' Component={OrderHistory}></Route>
        <Route path='/products/:user_id/new' Component={ProductCreatePage}></Route>
        <Route path='/products/details' Component={ProductsDetail}></Route>
        <Route path='/product/:user_id/history/:order_id' Component={OrderHistoryMangement}></Route>
        <Route path='/product/:userId/viewcart' Component={AddtoCart}></Route>
        <Route path='/product/:userId/:productId/addtocart' Component={AddProducttoCart}></Route>
        <Route path='/products/:sellerId/:product_id' Component={EditorDeleteProducts}></Route>
         */}
      </Routes>

      </Router>

  )
}
