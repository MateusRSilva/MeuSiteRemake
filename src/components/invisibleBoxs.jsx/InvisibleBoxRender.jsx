import BlockZelda from './boxs/BoxZelda';
import BlockSword from './boxs/BoxSword';
import BlockContato from './boxs/BoxContato';
import BlockRedes from './boxs/BoxRedes';
import BlockSobreMim from './boxs/BoxSobreMim';
import BlockHollow from './boxs/BoxHollow';
import BlockMHW from './boxs/BoxMHW';
import BlockConhecimentos from './boxs/BoxConhecimentos';
import BlockDiploma from './boxs/BoxDiploma';
import BlockProjetos from './boxs/BoxProjetos';
import BlockExperiencia from './boxs/BoxExperiencias';
import BlockCama from './boxs/BoxCama';

const InvisibleBox = () => {
    return (
        <>
            <BlockSword />
            <BlockZelda />
            <BlockContato />
            <BlockRedes />
            <BlockSobreMim />
            <BlockMHW />
            <BlockHollow />
            <BlockConhecimentos />
            <BlockDiploma />
            <BlockProjetos />
            <BlockExperiencia />
            <BlockCama />
        </>
    );
}

export default InvisibleBox;
