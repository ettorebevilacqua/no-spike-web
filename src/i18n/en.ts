import englishMessages from 'ra-language-english';

export const messages = {
    simple: {
        action: {
            close: 'Close',
            resetViews: 'Reset views',
        },
        'create-post': 'New post',
    },
    ...englishMessages,
    resources: {
        visitors: {
            name: 'Visitor |||| Visitors',
            fieldGroups:{
                address: 'address',
                password: 'password',
                identity: 'identity',
                first_name: 'first name',
                last_name: 'last_name'
            },
            fields: {
                commands: 'Orders',
                first_seen: 'First seen',
                groups: 'Segments',
                last_seen: 'Last seen',
                last_seen_gte: 'Visited Since',
                name: 'Name',
                total_spent: 'Total spent',
                password: 'Password',
                confirm_password: 'Confirm password',
                stateAbbr: 'State',
            },
        },
        posts: {
            name: 'Post |||| Posts',
            fields: {
                commentable_short: 'Com.',
                commentable: 'Commentable',
                notifications: 'Notifications recipients',
                nb_view: 'Nb views',
                nb_comments: 'Nb comments',
                password: 'Password (if protected post)',
                pictures: 'Related Pictures',
            },
        },
        comments: {
            name: 'Comment |||| Comments',
            fields: {
                post_id: 'Post',
            },
        },
        users: {
            name: 'User |||| Users',
            fields: {
                name: 'Name',
                role: 'Role',
            },
        },
    },
    post: {
        list: {
            search: 'Search',
        },
        form: {
            summary: 'Summary',
            body: 'Body',
            miscellaneous: 'Miscellaneous',
            comments: 'Comments',
        },
        edit: {
            title: 'Post "%{title}"',
        },
        action: {
            save_and_edit: 'Save and Edit',
            save_and_add: 'Save and Add',
            save_and_show: 'Save and Show',
            save_with_average_note: 'Save with Note',
        },
    },
    comment: {
        list: {
            about: 'About',
        },
    },
    user: {
        list: {
            search: 'Search',
        },
        form: {
            summary: 'Summary',
            security: 'Security',
        },
        action: {
            save_and_add: 'Save and Add',
            save_and_show: 'Save and Show',
        },
    },
};

export default messages;
