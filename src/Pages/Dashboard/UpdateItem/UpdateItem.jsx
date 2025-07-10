import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const UpdateItem = () => {
    const item=useLoaderData();
    const{image, _id}=item;

    console.log(item);
        const { register, handleSubmit } = useForm();
    const axiosSecure = useAxiosSecure()


          const onSubmitItem = async (data) => {
                console.log(data);

                let imageUrl=image;//keep the existing image URL by default

            if(data.image && data.image[0]){
                    
                const formData = new FormData();
                formData.append('image', data.image[0])
        
                try {
                    const res = await axiosSecure.post('/upload-image', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                    console.log(res.data);
                    if (res.data.success) {
                      imageUrl=res.data.data.display_url
                    }
        
                } catch (error) {
                    console.error('Upload failed:', error);

                      Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Image upload failed",
                    showConfirmButton: false,
                    timer: 1500
                });
                return; // Stop execution if image upload fails
        
                }
            }

            //prepare the menu item data with either new or existing image url

           
            const menuItem = {
                            name: data.name,
                            category: data.category,
                            price: parseFloat(data.price),
                            recipe: data.recipe,
                            // image: res.data.data.display_url
                            image:imageUrl
        
                        }
                        //now send data to the database
                        try {
                            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
                        console.log(menuRes.data);
                        if (menuRes.data.modifiedCount > 0) {

                            //show success popup
                            // reset();
                            
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${data.name} Updated Successfully`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                            
                        } catch (error) {
                            //
                            console.error('Update failed:', error);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Update failed",
                showConfirmButton: false,
                timer: 1500
             });
             
           }
         }
    
    
    return (
        <div>
            <SectionTitle heading={'Update Item'} subHeading={'Refresh Info'} />

            
            <div>
            <form onSubmit={handleSubmit(onSubmitItem)}>
                    {/*recipe name  */}
            <fieldset className="fieldset my-6">
              <legend className="fieldset-legend">Recipe name?</legend>
              <input defaultValue={item.name} {...register('name', { required: true })} type="text" className="input w-full" placeholder="Enter recipe name" />

              </fieldset>

                    {/* 2nd field */}
            <div className='flex items-center gap-4'>

                        {/* category */}
                <fieldset className="fieldset my-6 w-full">
                   <legend className="fieldset-legend">Select a category</legend>
                    {/* select category */}
                  <select {...register('category', { required: true })}
                     defaultValue={item.category} className="select">
                      <option disabled={true}>Select a category</option>
                      <option value='salad'>Salad</option>
                   <option value='pizza'>Pizza</option>
                 <option value='soup'>Soup</option>
                   <option value='dessert'>Dessert</option>
                    <option value='drinks'>Drinks</option>
                   </select>

                 </fieldset>

                        {/* price */}
             <fieldset className="fieldset w-full my-6">
              <legend className="fieldset-legend">Price</legend>
              <input defaultValue={item.price} {...register('price', { required: true })} type="number" className="input w-full" placeholder="Price" />

               </fieldset>


             </div>

                    {/* 3rd fied */}
                    {/*recipe name  */}
           <fieldset className="fieldset">
             <legend className="fieldset-legend">Recipe details</legend>
              <textarea defaultValue={item.recipe} {...register('recipe')} className="textarea h-24 md:w-3xl" placeholder="Bio"></textarea>
                </fieldset>

             <div>
                <legend className="fieldset-legend">Recipe Image</legend>
              <input {...register('image', { required: false })} type="file" className='file-input w-full max-w-xs mt-2' />
                    </div>



                    <div className='mt-5 btn bg-blue-500'>
                        <input type="submit" value={'Update Menu Item'} />
                    </div>

                </form>
            </div>

        </div>
    );
};

export default UpdateItem;