export default {
	users: {
		email: {
			required: true,
			type: 'string',
			unique: true
		},
		password: {
			required: true,
			type: 'string'
		},
		createTime: {
			required: true,
			type: 'timestamp'
		}
	},
	projects: {
		name: {
			required: true,
			type: 'string'
		},
		description: {
			type: 'string',
		},
		remark: {
			type: 'string'
		},
		creat_by: {
			required: true,
			type: 'objectId'
		},
		update_by: {
			required: true,
			type: 'objectId'
		},
		create_at: {
			required: true,
			type: 'timestamp',
			default: Date.now
		},
		update_at: {
			required: true,
			type: 'timestamp',
			default: Date.now
		},
		members: {
			required: true,
			type: 'array'
		},
		private: {
			required: true,
			type: 'bool'
		},
		deleted: {
			required: true,
			type: 'bool'
		}
	},
	apis: {
		name: {
			required: true,
			type: 'string'
		},
		description: {
			type: 'string'
		},
		creat_by: {
			required: true,
			type: 'objectId'
		},
		update_by: {
			required: true,
			type: 'objectId'
		},
		create_at: {
			required: true,
			type: 'timestamp',
			default: Date.now
		},
		update_at: {
			required: true,
			type: 'timestamp',
			default: Date.now
		},
		parent_project: {
			required: true,
			type: 'objectId'
		},
		request: {
			url: String
			method: String,
			query: Array,
			body: Array
		},
		response: {
			examples: Array,
			params_detail: Array
		},
		remark: {
			type: 'string'
		},
		status: {
			required: true,
			type: 'string'
		},
		deleted: {
			required: true,
			type: 'bool'
		}
	}
};
