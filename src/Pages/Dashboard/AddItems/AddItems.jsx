
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from "react-hook-form";
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

// const image_hosting_api = `https://api.imgbb.com/1/upload/?key=${image_hosting_key}`


const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const onSubmit = async (data) => {
        console.log(data);


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
                //now send the menu item data to the server with the imge url
                const menuItem = {
                    name: data.name,
                    category: data.category,
                    price: parseFloat(data.price),
                    recipe: data.recipe,
                    image: res.data.data.display_url

                }
                //now send data to the database
                const menuRes = await axiosSecure.post('/menu', menuItem)
                console.log(menuRes.data);
                if (menuRes.data.insertedId) {
                    //show success popup
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.name} Added Successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }

        } catch (error) {
            console.error('Upload failed:', error);

        }

        // console.log(data);
        // //image upload to image bb and then get an url
        // const imageFile = { image: data.image[0] }
        // const res = await axiosPublic.post(image_hosting_api, imageFile, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // });
        // console.log(res.data);



    }

    return (
        <div>
            <SectionTitle heading={'add an item'} subHeading={"What's New?"}></SectionTitle>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/*recipe name  */}
                    <fieldset className="fieldset my-6">
                        <legend className="fieldset-legend">Recipe name?</legend>
                        <input {...register('name', { required: true })} type="text" className="input w-full" placeholder="Enter recipe name" />

                    </fieldset>

                    {/* 2nd field */}
                    <div className='flex items-center gap-4'>

                        {/* category */}
                        <fieldset className="fieldset my-6 w-full">
                            <legend className="fieldset-legend">Select a category</legend>
                            {/* select category */}
                            <select {...register('category', { required: true })}
                                defaultValue="Select a category" className="select">
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
                            <input {...register('price', { required: true })} type="number" className="input w-full" placeholder="Price" />

                        </fieldset>


                    </div>

                    {/* 3rd fied */}
                    {/*recipe name  */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Recipe details</legend>
                        <textarea {...register('recipe')} className="textarea h-24 md:w-3xl" placeholder="Bio"></textarea>
                    </fieldset>

                    <div>
                        <legend className="fieldset-legend">Recipe Image</legend>
                        <input {...register('image', { required: true })} type="file" className='file-input w-full max-w-xs mt-2' />
                    </div>



                    <div className='mt-5 btn bg-blue-500'>
                        <input type="submit" value={'Add Item'} />
                    </div>

                </form>
            </div>


        </div>
    );
};

export default AddItems;