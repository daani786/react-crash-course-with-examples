import React, { Component } from "react";

// columns : array
// sortColumn : object
// onSort : function

class TableHeader extends Component {
    raiseSort = path => {
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path) {
            sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
        } else {
            sortColumn.path = path;
            sortColumn.order = "asc";
        }
        this.props.onSort(sortColumn);
    };

    renderSortIcon = column => {
        if (column.path !== this.props.sortColumn.path) return null;
        if (this.props.sortColumn.order === "asc")
            return <i className="fa fa-sort-asc"></i>;
        if (this.props.sortColumn.order === "desc")
            return <i className="fa fa-sort-desc"></i>;
    };

    render() {
        return (
            <thead>
                <tr>
                    {this.props.columns.map(column => (
                        <th
                            className="clickable"
                            key={column.path || column.key}
                            onClick={() => this.raiseSort(column.path)}
                        >
                            {column.label} {this.renderSortIcon(column)}
                        </th>
                    ))}
                    <th></th>
                </tr>
            </thead>
        );
    }
}

export default TableHeader;
