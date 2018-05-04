import UserStore from '@/store/User';
import _ from 'lodash';

describe('User Store', () => {
    it('userId state management', () => {
        expect(UserStore.state.userId).to.equal(null);

        UserStore.setUserIdAction('test');

        expect(UserStore.state.userId).to.equal('test');

        UserStore.clearUserIdAction();

        expect(UserStore.state.userId).to.equal(null);
    });

    it('managedResource state management', () => {
        expect(UserStore.state.managedResource).to.equal(null);

        UserStore.setManagedResourceAction('test');

        expect(UserStore.state.managedResource).to.equal('test');

        UserStore.clearManagedResourceAction();

        expect(UserStore.state.managedResource).to.equal(null);
    });

    it('roles state management', () => {
        expect(UserStore.state.roles).to.equal(null);

        UserStore.setRolesAction('test');

        expect(UserStore.state.roles).to.equal('test');

        UserStore.clearRolesAction();

        expect(UserStore.state.roles).to.equal(null);
    });

    it('Clear all state management', () => {
        UserStore.setRolesAction('test');
        UserStore.setManagedResourceAction('test');
        UserStore.setUserIdAction('test');

        expect(UserStore.state.roles).to.equal('test');
        expect(UserStore.state.managedResource).to.equal('test');
        expect(UserStore.state.userId).to.equal('test');

        UserStore.clearStoreAction();

        expect(UserStore.state.roles).to.equal(null);
        expect(UserStore.state.managedResource).to.equal(null);
        expect(UserStore.state.userId).to.equal(null);
    });

    it('profile state management', () => {
        UserStore.setProfileAction({
            givenName: 'test',
            sn: 'test',
            email: 'test',
            userName: 'test'
        });

        expect(UserStore.state.givenName).to.equal('test');
        expect(UserStore.state.sn).to.equal('test');
        expect(UserStore.state.email).to.equal('test');
        expect(UserStore.state.userName).to.equal('test');

        UserStore.clearProfileAction();

        expect(_.isNull(UserStore.state.profile)).to.equal(true);
        expect(UserStore.state.givenName).to.equal('');
        expect(UserStore.state.sn).to.equal('');
        expect(UserStore.state.email).to.equal('');
        expect(UserStore.state.userName).to.equal('');

        UserStore.setProfileAction({});

        expect(_.isObject(UserStore.state.profile)).to.equal(true);
        expect(UserStore.state.givenName).to.equal('');
        expect(UserStore.state.sn).to.equal('');
        expect(UserStore.state.email).to.equal('');
        expect(UserStore.state.userName).to.equal('');
    });
});
