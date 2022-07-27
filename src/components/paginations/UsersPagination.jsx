import React , {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem'
import {useDispatch , useSelector} from 'react-redux';
import {getAllUsers} from '../../actions/user';

const UsersPagination = ({page}) => {
    const {numberOfPages} = useSelector((state)=> state.user);
    const dispatch = useDispatch();

    useEffect(()=>{
            if(page){
              dispatch(getAllUsers(page));
            }
    }, [page]);
  return (
    <Stack spacing={2}>
   
    <Pagination count={numberOfPages}
     variant="outlined" 
      page={Number(page) || 1}
    color = "primary"
    shape="rounded" 
    renderItem={
        (item)=>(
            <PaginationItem  {...item} component={Link} to={`/user?page=${item.page}`}/>
        )
    }
    />
    </Stack>
  )
}

export default UsersPagination