'use client';

import { Table } from 'flowbite-react';
import { Button, Badge, Toast,Tooltip, Spinner  } from 'flowbite-react';
import { HiTrash, HiPaperAirplane , HiPencilAlt, HiX,HiOutlinePaperAirplane} from 'react-icons/hi';
import { useState, useContext } from 'react';
import { Datacontext } from '@/app/dashboard/datacontext';
import EditFormModal from './EditFormModal';
import { deleteData, searchDocument, updateDataDb } from '@/app/dashboard/dbcrud';

const TableUser = ({ sessionuid }) => {
    const { objdata,setObjdata, loading } = useContext(Datacontext);

    const [selectedRow, setSelectedRow] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [removedata, setRemovedata] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleEditClick = (item) => {
        setSelectedRow(item);
        setOpenModal(true);
    };

    const onCloseModal = () => {
        setOpenModal(false);
        setSelectedRow('');
    };



    const handleSearch = async (id) => {
        const data = await searchDocument(id);
        const updata = {...data, eventprime:!data.eventprime};
        await updateDataDb(updata,id,setIsLoading);
    };
        

    const deletecue = (id) => {
        setObjdata(objdata.filter((cue) => cue.googleid !== id));
        deleteData(id);
        setRemovedata(true);
        setTimeout(() => {
            setRemovedata(false);
          }, 1000);
       
    }

    const priorityup = (id) => {
        setObjdata(objdata.map((item)=> item.googleid === id && item.sessionuid == sessionuid ? {...item, eventprime:!item.eventprime } : item));
        handleSearch(id);
    }
    

    return (
        <div className="overflow-x-auto">
            {selectedRow && <EditFormModal openModal={openModal} onCloseModal={onCloseModal} selectedRow={selectedRow} />}
            {objdata.length > 0 ?
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell>Event ID</Table.HeadCell>
                    <Table.HeadCell>Event Name</Table.HeadCell>
                    <Table.HeadCell>Category</Table.HeadCell>
                    <Table.HeadCell>Date</Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {objdata.map((item, index) => (
                        item.sessionuid == sessionuid &&
                        <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>
                                {item.eventprime ? 
                                <Tooltip content="On Queue" placement="bottom">
                                    <Badge color="success" size="sm" icon={HiPaperAirplane} onClick={()=>priorityup(item.googleid)} >{item.genid}</Badge>
                                </Tooltip>
                                : 
                                <Badge color="indigo" size="sm" icon={HiOutlinePaperAirplane} onClick={()=>priorityup(item.googleid)} >{item.genid}</Badge>
                                }
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {item.eventname}
                            </Table.Cell>
                            <Table.Cell>{item.eventcat}</Table.Cell>
                            <Table.Cell>{item.datepicker}</Table.Cell>
                            <Table.Cell>
                                <div className="btn-cont-tbl">
                                    <Button color="gray" onClick={() => handleEditClick(item)}>
                                        <HiPencilAlt className="mr-2 h-4 w-4" /> Edit
                                    </Button>
                                    <Button color="gray" onClick={() => deletecue(item.googleid)} >
                                        <HiTrash className="mr-2 h-4 w-4" /> Del
                                    </Button>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table> :
            <div className="Banner-table">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Hi, you dont have any transacton yet
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Book any Event, you would not forget your reservation kindly take look 
                  <span className="like-icon">👍</span>
                </p>
            </div>    
            }

        {removedata &&
                <Toast className="fulltoast">
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                        <HiX className="h-5 w-5" />
                    </div>
                    <div className="ml-3 text-sm font-normal">Item has been deleted.</div>
                    <Toast.Toggle onDismiss={() => setRemovedata(false)}  />
                </Toast>
            }
        </div>
    )
}

export default TableUser
