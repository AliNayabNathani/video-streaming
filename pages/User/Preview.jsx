import React from 'react'
import UserTemplate from '../../components/User/UserTemplate'

const Preview = () => {
    return (
        <UserTemplate>
            <Box
                key={index}
                mt={"2rem"}
                border={"1px solid transparent"}
                cursor={"pointer"}
                _hover={{ scale: "1.5" }}
                height={'auto'}
                onClick={() => router.push('/User/Preview')}
                minW={["80%", "300px"]}
                mr={"1rem"}
            >
                <Video src={'https://vjs.zencdn.net/v/oceans.mp4'} poster={'/assests/Shows/dark-small.jpg'} name={'Dark'} />
            </Box>
        </UserTemplate>
    )
}

export default Preview