import { Routes, Route, Link } from 'react-router-dom'
import navbar_button from './Navigation'
import { authData } from '../../Authentication/AuthWrapper'

const RenderRoutes = () => {
  const { user, loading } = authData();
  return (
    <div className='flex-1 w-full'>
        <div className='h-full w-full'>
            {loading ?
            <div className="h-full w-full flex items-center justify-center bg-white text-4xl font-bold"><div className='text-blue-700'>Loading...</div></div>
            :
            <Routes>

                        <>{navbar_button.map((r, i) => {
                            if (r.isPrivate && user.isAuthenticated){
                              return <Route key={i} path={r.path} element={r.element} />
                            }else if (!r.isPrivate) {
                              return <Route key={i} path={r.path} element={r.element} />
                            }else return true;
                        })}
                        </>
            </Routes>

            }
        </div>
    </div>
  )
}

const RenderMenu = () => {

  const { user, logout } = authData();

  const MenuItem = ({r}) =>{
    return(
      <div className='btn'><Link to={r.path}> {r.name} </Link></div>
    )
  }


    return (
          <div className='h-12 w-full bg-blue-400 flex items-center justify-center md:gap-20 gap-0 font-extralight text-white cursor-pointer font-serif'>
              {navbar_button.map((r, i ) => {
                if ( !r.isPrivate && r.isMenu){
                  return (
                      <MenuItem key={i} r={r}/>
                  )
                }else if(user.isAuthenticated && r.isMenu){
                  return(
                      <MenuItem key={i} r={r}/>
                  )
                }
              })}
              {user.isAuthenticated ? <div className='btn'><Link to={'/'} onClick={logout}>Logout</Link></div>
              :
              <>
              <div className='btn'><Link to={'login'}>Login</Link></div>
              <div className='btn'><Link to={'signup'}>Signup</Link></div>
              </>}
          </div>
          
    )
  }
export {RenderRoutes, RenderMenu};
