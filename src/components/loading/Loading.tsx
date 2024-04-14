import { Hourglass } from 'react-loader-spinner'

const Loading: React.FC = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-800">
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
    </div>
  )
}

export { Loading }
