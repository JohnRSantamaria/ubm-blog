import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SaveButton from '../buttons/save';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { createBlog } from '@/firebase/createBlog';
import 'react-quill/dist/quill.snow.css'; // Asegúrate de que esto esté importado

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function FormBlog() {
	const style_input =
		'w-full mb-2 px-2 py-3 rounded-lg border border-gray-light bg-pd-light dark:bg-pd-dark-secondary focus:outline-none focus:border-gray text-gray-darkest dark:text-pd-light';
	const style_input_error = 'text-red-900 text-sm mb-1';

	return (
		<Formik
			initialValues={{
				title: '',
				content: '',
				overview: '',
			}}
			validationSchema={Yup.object({
				title: Yup.string()
					.required('El título es requerido')
					.min(3, 'Debe ser mayor a tres caracteres')
					.max(50, 'Debe ser menor de 50 caracteres'),
				content: Yup.string().required('El contenido es requerido'),
				overview: Yup.string()
					.required('La descripción es requerida')
					.min(3, 'Debe ser mayor a tres caracteres')
					.max(150, 'Debe ser menor de 150 caracteres'),
			})}
			onSubmit={async (values, { resetForm }) => {
				await createBlog({
					title: values.title,
					content: values.overview,
					slug: values.title.replaceAll(' ', '-'),
					overview: values.overview,
				});

				resetForm();
			}}
		>
			{({ values, setFieldValue }) => (
				<Form className='flex flex-col'>
					<label htmlFor='title'>Título:</label>
					<Field
						type='text'
						name='title'
						id='title'
						placeholder='Mi primer blog'
						className={style_input}
						maxLength={51}
					/>
					<ErrorMessage
						name='title'
						component='div'
						className={style_input_error}
					/>

					<label htmlFor='overview'>Descripción corta:</label>
					<Field
						type='text'
						name='overview'
						id='overview'
						placeholder='Este blog se trata de...'
						className={style_input}
						maxLength={151}
					/>
					<ErrorMessage
						name='overview'
						component='div'
						className={style_input_error}
					/>

					<label htmlFor='content'>Contenido:</label>
					<ReactQuill
						value={values.content}
						onChange={(value) => setFieldValue('content', value)}
						className='mb-2'
					/>
					<ErrorMessage
						name='content'
						component='div'
						className={style_input_error}
					/>

					<SaveButton text='Guardar' />
				</Form>
			)}
		</Formik>
	);
}
