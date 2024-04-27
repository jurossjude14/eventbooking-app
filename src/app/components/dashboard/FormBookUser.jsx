
'use client';

import { Button, Textarea, TextInput, Select, Checkbox, Label } from 'flowbite-react';
import { HiCollection, HiClipboardCheck, HiBookmark } from 'react-icons/hi';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import {Datacontext } from '@/app/dashboard/datacontext';
import { addDbSet } from '@/app/dashboard/dbcrud';

const FormBookUser = ({sessionuid}) => {
  const { register, handleSubmit, reset, formState: { errors }, } = useForm();
  const { objdata,setObjdata, loading } = useContext(Datacontext);

const genId = () => {
  let id = Math.floor(Math.random() * 100) + 1;
  id += 1;
  return id;
}


const addcue = (cueobj) => {
    const id = genId();
    const dateid = new Date();
    const datems = dateid.getMilliseconds();
    
    const genid = `JM${id}-${datems}`;
    const googleid = `GCE${id}-${datems}-CUE`;

    const singleobj = {googleid,genid,sessionuid,...cueobj}  
    setObjdata([...objdata, singleobj]);
    addDbSet(singleobj);
}

  const onSubmitdata = (data) => {
    addcue({...data});
    reset();
  };
   
  return (
    <div>
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit(onSubmitdata)}>
        <div>
          <div className="mb-2 block">
            <h3 className="font-bold">
              <div className="flex flex-wrap gap-2">
                Book Any Event
              </div>
            </h3>
          </div>
          <TextInput
            {...register("eventname", {required: 'Field required',})} 
            id="eventname" type="text" icon={HiClipboardCheck} placeholder="Event Name"  shadow />
        </div>
        <div className="max-w-md">
          <Select 
           {...register("eventcat", {required: 'Field required',})} 
          id="eventcat" icon={HiCollection}>
            <option>Selected</option>
            <option>Meeting</option>
            <option>Accomodation</option>
            <option>Ordering</option>
          </Select>
        </div>
        <input className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500  text-sm rounded-lg"
         type="date" id="datepicker" {...register("datepicker")} />    
        <div>
          <Textarea 
          {...register("eventmsg", {required: 'Field required',})} 
          id="eventmsg" type="text" placeholder="Event Description" shadow />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Checkbox {...register("eventprime")} id="prime" />
            <Label htmlFor="prime">Priority</Label>
          </div>
        </div>
        <Button type="submit">Submit Booking</Button>
      </form>
    </div>
  )
}

export default FormBookUser
