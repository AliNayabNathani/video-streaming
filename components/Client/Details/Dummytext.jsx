import { Box } from "@chakra-ui/react";

export const DummyText = ({ count }) => {
    count++;
    return (
        <Box mt={'3rem'} mr={{ base: 'none', md: '15rem' }}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil molestiae fuga voluptatibus repellendus illum sint quae facilis vitae harum deleniti accusantium quos iure, cumque illo asperiores officiis. Magnam earum doloribus velit fugit nisi consequatur impedit illo exercitationem accusamus vitae nam ea ab voluptate ex laboriosam, molestiae culpa eius, saepe voluptas.</p>
            <br />
            <br />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, facilis. Veritatis eius placeat id nemo quos maxime ullam voluptas. Dolore iusto aperiam impedit. Cumque quod at expedita, nobis corporis placeat?</p>
            <br />
            <br />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla voluptatum commodi quaerat porro autem qui sunt, vel reprehenderit. A quas numquam corrupti rem, optio non id recusandae hic dolor explicabo illum harum, dignissimos beatae quam aperiam at accusamus! Perspiciatis, sapiente.</p>
            <br /><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste provident est distinctio dolorum pariatur, enim officia, possimus sunt perspiciatis consectetur in, qui voluptatibus molestias hic. Ratione odit cum sed exercitationem mollitia! Unde quas assumenda delectus consectetur voluptas voluptate, repudiandae distinctio ipsum magnam quaerat quisquam odio tempora dolorem asperiores maiores in.</p>
        </Box>
    );
}