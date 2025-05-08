import React from 'react';
import OnboardingHeader from './Header/OnboardingHeader';
import BasicHeader from './Header/BasicHeader';
import CreateJoinHeader from './Header/CreateJoinHeader';
import WorkspaceHeader from './Header/WorkSpaceHeader';

interface HeaderProps {
status: 'onboarding' | 'basicHeader' | 'createjoin' | 'workspace';
}

const HEADER_COMPONENTS = {
onboarding: OnboardingHeader,
basicHeader: BasicHeader,
createjoin: CreateJoinHeader,
workspace: WorkspaceHeader,
};

const Header = ({ status }: HeaderProps) => {
const SelectedHeader = HEADER_COMPONENTS[status];
return SelectedHeader ? <SelectedHeader /> : null;
};

export default Header;
