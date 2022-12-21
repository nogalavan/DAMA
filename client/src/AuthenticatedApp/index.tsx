import { Route, Routes } from 'react-router-dom';
import Shell from './Shell';
import Users from './Users';
import NotFound from '../components/NotFound';
import ManageItems from './ManageItems';
import PurchasesHistory from './PurchasesHistory';
import Inventory from './Inventory';

const ShellRoutes = () => (
  <Routes>
    <Route path='/' element={<Shell />}>
      <Route index element={<ManageItems />} />
      <Route path='manage-items' element={<ManageItems />} />
      <Route path='purchases-history' element={<PurchasesHistory />} />
      <Route path='inventory' element={<Inventory />} />
      <Route path='users' element={<Users />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  </Routes>
);

export default ShellRoutes;