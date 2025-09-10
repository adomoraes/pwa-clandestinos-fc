import React from "react"

function Footer() {
	return (
		<footer className='bg-black py-8'>
			<div className='container mx-auto px-6'>
				<div className='flex flex-col items-center justify-between sm:flex-row'>
					<p className='text-center text-gray-400 sm:text-left'>
						&copy; {new Date().getFullYear()} Clandestinos FC. Todos os direitos
						reservados.
					</p>
					<div className='mt-4 flex space-x-4 sm:mt-0'>
						<a href='#' className='text-gray-400 hover:text-white'>
							Instagram
						</a>
						<a href='#' className='text-gray-400 hover:text-white'>
							Facebook
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
