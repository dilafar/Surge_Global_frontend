import React , {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem'
import {useDispatch , useSelector} from 'react-redux';
import {getNotes } from '../../actions/notes';

const NotesPagination = ({page}) => {
    const {numberOfPages} = useSelector((state)=> state.notesReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
            if(page){
                dispatch(getNotes(page));
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
            <PaginationItem  {...item} component={Link} to={`/notes?page=${item.page}`}/>
        )
    }
    />
    </Stack>
  )
}

export default NotesPagination